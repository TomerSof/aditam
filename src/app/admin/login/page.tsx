"use client";
import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import supabase from "@/app/client/SupabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: { prompt: "select_account" },
        redirectTo: window.location.origin + "/admin/callback",
      },
    });

    setLoading(false);

    if (error) {
      console.error("Google login error:", error.message);
      alert(error.message);
      return;
    }
  };

  const checkAdminBefore = async () => {
    const { data, error } = await supabase
      .from("admins")
      .select("email")
      .eq("email", email)
      .single();
    if (!data || error) {
      alert("Access denied: you are not an admin");
      return false;
    } else return true;
  };

  const handleMagicLink = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    // Check if email is admin before sending magic link
    const isAdmin = await checkAdminBefore();
    if (!isAdmin) return;

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert("Magic link sent!");
    setLoading(false);
  };

  const handleManualLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    const isAdmin = await checkAdminBefore();
    if (!isAdmin) {
      alert("Access denied: you are not an admin");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert("Logged in!");
    setLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Login
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleManualLogin}
            disabled={loading}
          >
            Login
          </Button>

          <Button
            variant="outlined"
            onClick={handleMagicLink}
            disabled={loading || !email}
          >
            Send Magic Link
          </Button>

          <Divider>or</Divider>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            Continue with Google
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

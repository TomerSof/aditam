import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Privacy() {
  const [showCookieNotice, setShowCookieNotice] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Check localStorage to decide whether to show the banner
  useEffect(() => {
    const dismissed = localStorage.getItem("cookieNoticeDismissed");
    if (!dismissed) setShowCookieNotice(true);
  }, []);

  // Dismiss banner and persist in localStorage
  const handleDismiss = () => {
    localStorage.setItem("cookieNoticeDismissed", "false");
    setShowCookieNotice(false);
  };
  return (
    <>
      {showCookieNotice && (
        <Box
          position="fixed"
          bottom={0}
          width="100%"
          bgcolor="grey.900"
          color="white"
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          zIndex={9999}
        >
          <Typography>
            This site uses cookies to keep you logged in securely.{" "}
            <Button
              variant="text"
              color="primary"
              onClick={() => setShowPrivacyModal(true)}
              style={{ textTransform: "none" }}
            >
              Privacy Policy
            </Button>
          </Typography>
          <Button variant="contained" size="small" onClick={handleDismiss}>
            Got it
          </Button>
        </Box>
      )}

      {/* Privacy Modal */}
      <Modal
        open={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        aria-labelledby="privacy-modal-title"
        aria-describedby="privacy-modal-description"
      >
        <Paper
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 24,
            maxWidth: 400,
            outline: "none",
          }}
        >
          <Typography id="privacy-modal-title" variant="h6" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography id="privacy-modal-description" variant="body2">
            We respect your privacy. This site uses cookies to keep you logged
            in securely via Supabase authentication. Only your email and session
            data are stored for admin access. Logging in with Google uses Google
            for authentication only. You can request deletion of your account by
            contacting us.
          </Typography>
          <Box mt={2} textAlign="right">
            <Button
              variant="contained"
              onClick={() => setShowPrivacyModal(false)}
            >
              Close
            </Button>
          </Box>
        </Paper>
      </Modal>
    </>
  );
}

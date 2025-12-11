export const clerkAppearance = {
  layout: {
    socialButtonsVariant: "iconButton" as const,
    socialButtonsPlacement: "bottom" as const,
  },
  variables: {
    colorPrimary: "#8b5cf6",
    colorBackground: "rgba(255, 255, 255, 0.1)",
    colorInputBackground: "rgba(255, 255, 255, 0.1)",
    colorInputText: "#ffffff",
    colorText: "#ffffff",
    colorTextSecondary: "#d1d5db",
    borderRadius: "0.75rem",
  },
  elements: {
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "1rem",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    headerTitle: {
      color: "#ffffff",
      fontSize: "1.875rem",
      fontWeight: "bold",
    },
    headerSubtitle: {
      color: "#d1d5db",
    },
    formButtonPrimary: {
      backgroundColor: "#8b5cf6",
      "&:hover": {
        backgroundColor: "#7c3aed",
      },
    },
    formFieldInput: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "#ffffff",
      "&::placeholder": {
        color: "#9ca3af",
      },
    },
    formFieldLabel: {
      color: "#e5e7eb",
    },
    socialButtonsBlockButton: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },
    footerActionText: {
      color: "#d1d5db",
    },
    footerActionLink: {
      color: "#8b5cf6",
      "&:hover": {
        color: "#7c3aed",
      },
    },
  },
};

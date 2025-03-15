import { ref } from 'vue';
import emailjs from '@emailjs/browser';

export function useEmail() {
  const isSending = ref(false);

  const sendEmail = async (email, message) => {
    isSending.value = true;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email,
          message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      return { success: true };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false };
    } finally {
      isSending.value = false;
    }
  };

  return { sendEmail, isSending };
}

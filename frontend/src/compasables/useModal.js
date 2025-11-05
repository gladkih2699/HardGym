import { reactive } from "vue";

export default function useModal() {
  const modals = reactive({
    user: false,
    admin: false,
    coach: false,
    train: false,
    review: false,
  });

  const openModal = (key) => {
    modals[key] = true;
  };

  const closeModal = (key) => {
    modals[key] = false;
  };

  return { modals, openModal, closeModal };
}

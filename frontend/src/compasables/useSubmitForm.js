// Вспомогательный хук для обработки отправки формы и закрытия модального окна
export default async function useSubmitForm(closeModalFn, reqFn, formData) {
  const result = await reqFn(formData)
  closeModalFn();
  Object.keys(formData).forEach((key) => {
    formData[key] = "";
  });
}

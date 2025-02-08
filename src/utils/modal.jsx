export const modal = (id) => {
    const modal = document.getElementById(id);
    modal && modal.showModal();
  };


  export const closeModal = (id) => {
    const modal = document.getElementById(id);
    modal && modal.close();
  };
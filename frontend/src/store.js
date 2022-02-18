import create from "zustand";

const useStore = create(set => ({
    modalShowing: false,
    selectedDate: new Date(),
    showModal: () => set({modalShowing: true}),
    hideModal: () => set({modalShowing: false}),
    selectDate: (date) => set({selectedDate: date})
  }));

export default useStore;
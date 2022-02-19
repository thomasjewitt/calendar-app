import create from "zustand";

const useStore = create((set, get) => ({
    modalShowing: false,
    selectedDate: new Date(),
    events: {},
    showModal: () => set({modalShowing: true}),
    hideModal: () => set({modalShowing: false}),
    selectDate: (date) => set({selectedDate: date}),
    getEvents: async () => {
        const response = await fetch("/events/", {method: 'GET'});
        set({events: await response.json()});
    },
    getEventByDate: date => {
        const events = get().events;
        return events[date];
    }
  }));

export default useStore;
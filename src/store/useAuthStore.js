import { create } from "zustand";
import { axiosIntences } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdateProfile: false,
  isChekingAuth: true,
  checkAuth: async () => {
    try {
      const res = await axiosIntences.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkout :", error);
      set({ authUser: null });
    } finally {
      set({ isChekingAuth: false });
    }
  },
  signup: async (data) => {},
}));

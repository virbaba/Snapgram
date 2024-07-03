import { Routes, Route } from "react-router-dom";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import AuthLayout from "./_auth/AuthLayout";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";

import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";

import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    // it's take 100% of screen
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;

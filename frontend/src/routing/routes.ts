import { createBrowserRouter } from "react-router";
import LandingPage from "../components/guest/LandingPage";
import LoginPage from "../components/authentication/LoginPage";
import HomePage from "../components/registered-user/HomePage";
import HomeSection from "../components/home-section/HomeSection";
import Profile from "../components/registered-user/Profile/Profile";
import ErrorPage from "../components/error/ErrorPage";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";
import RegisterPage from "../components/authentication/RegisterPage";
import TweetDetail from "../components/tweet-detail/TweetDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [
      {
        index: true,
        Component: HomeSection,
      },
      {
        path: "profile/:username",
        loader: async ({ params }) => {
          return { username: params };
        },
        Component: Profile,
      },
      {
        path: "tweet/:tweetId",
        loader: async ({ params }) => {
          return { tweetId: params };
        },
        Component: TweetDetail,
      },
    ],
    ErrorBoundary: ErrorPage,
  },
  {
    path: "/auth",
    Component: AuthenticationLayout,
    children: [
        {
            index: true,
            Component: LoginPage,
        },
        {
            path: "login",
            Component: LoginPage
        },
        {
            path: "register",
            Component: RegisterPage
        }
    ]
  },
]);

import type { Page } from "app/types";
import { Metadata } from "next";
import ManualPage from "./ManualPage";

export default async function Page({}: Page) {
  return <ManualPage />;
}

export const metadata: Metadata = {
  title: "Manual Page",
};

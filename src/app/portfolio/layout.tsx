import { getProjectsDynamic } from "@/data/FetchFromMyDb";
import { ProjectType } from "@/types/MyDbTypes";
import React from "react";
import Layout_LeftContentDisplay from "./layout_client";

export default async function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects: ProjectType[] = await getProjectsDynamic();

  return (
    <Layout_LeftContentDisplay projects={projects} rightContent={children} />
  );
}

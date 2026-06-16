import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <Title>Wellcome to about page</Title>
        <div className="flex items-center gap-4 mt-5">
          <Link href="/about/contact">Contact</Link>
          <Link href="/about/team">Team</Link>
        </div>
      </div>
    </div>
  );
};

export default About;

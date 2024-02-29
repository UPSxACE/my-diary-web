import { Button } from "@mantine/core";
import Link from "next/link";
import PageContainer from "../../components/page-containers/page-container";

export default function HomePage() {
  return (
    <PageContainer className="p-4">
      <article className="flex flex-1 flex-col items-center justify-center gap-5 lg:gap-14">
        <h1 className="xs:text-3xl m-0 text-center text-2xl sm:text-4xl lg:text-5xl dark:text-white">
          Empower your{" "}
          <em className="text-mantine-primary-4 not-italic">productivity</em>{" "}
          and your toughts
        </h1>
        <p className="dark:text-mantine-text xs:text-xl m-0 mb-1 max-w-[900px] text-center text-lg text-gray-500 sm:text-xl lg:text-2xl">
          Lightweight, intuitive, with a user-friendly interface, MyDiary is a
          web application for users who want an open-source alternative to keep
          their notes organized.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href="/register"
            component={Link}
            size="md"
            className="text-md sm:h-12 sm:px-6 md:h-12 md:px-7 md:text-lg"
          >
            Start Using
          </Button>
          <Button
            href="/#learn-more"
            component={Link}
            size="md"
            className="text-md sm:h-12 sm:px-6 md:h-12 md:px-7 md:text-lg"
            variant="default"
          >
            Learn More
          </Button>
        </div>
      </article>
    </PageContainer>
  );
}

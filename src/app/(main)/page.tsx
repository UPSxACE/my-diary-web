import { Button } from "@mantine/core";
import Link from "next/link";
import PageContainer from "../../components/page-container";

export default function HomePage() {
  return (
    <PageContainer className="p-4">
      <article className="flex-1 flex flex-col justify-center items-center gap-5 lg:gap-14">
        <h1 className="m-0 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center dark:text-white">
          Empower your{" "}
          <em className="not-italic text-mantine-mainColor-4">productivity</em>{" "}
          and your toughts
        </h1>
        <p className="m-0 mb-1 text-gray-500 dark:text-mantine-text text-lg xs:text-xl sm:text-xl lg:text-2xl max-w-[900px] text-center">
          Lightweight, intuitive, with a user-friendly interface, MyDiary is a
          web application for users who want an open-source alternative to keep
          their notes organized.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button
            href="/register"
            component={Link}
            size="md"
            className="sm:px-6 sm:h-12 text-md md:px-7 md:h-12 md:text-lg"
          >
            Start Using
          </Button>
          <Button
            href="/#learn-more"
            component={Link}
            size="md"
            className="sm:px-6 sm:h-12 text-md md:px-7 md:h-12 md:text-lg"
            variant="default"
          >
            Learn More
          </Button>
        </div>
      </article>
    </PageContainer>
  );
}

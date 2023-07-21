import { type FC } from "react";

interface PageProps {
  params: {
    postId: string;
  };
}
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const page = ({ params }: PageProps) => {
  return <div>post id page</div>;
};

export default page;

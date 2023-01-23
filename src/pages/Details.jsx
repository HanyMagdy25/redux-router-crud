
import usePostDetails from "../hooks/use-post-details";

export default function Details() {

  const { loading, error, record } = usePostDetails();

  return <div>Details</div>;
}

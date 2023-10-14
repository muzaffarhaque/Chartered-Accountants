import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error.message==null);

  return (
    <div id="error-page" className=" vh-100 d-flex align-items-center justify-content-center flex-column gap-3">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
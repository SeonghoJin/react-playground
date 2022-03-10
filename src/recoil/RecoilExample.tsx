// @flow
import * as React from "react";
import { useUser } from "./states/hooks/useUser";
import { useEffect } from "react";
import { getUser, lazyApi } from "../api";
import { Loading } from "../components/atoms/Loading";

type Props = {};
export const RecoilExample = (props: Props) => {
  const [user, setUser] = useUser();
  const [loading, setLoading] = React.useState(false);

  const fetch = React.useCallback(() => {
    (async () => {
      setLoading(false);
      console.log(loading);
      await lazyApi(5000);
      setLoading(true);
      console.log(loading);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const user = await getUser(1);
      setUser(user);
    })();
  }, [setUser]);

  return (
    <div>
      <button onClick={() => fetch()}></button>
      <RecoilExampleInner />
    </div>
  );
};

export const RecoilExampleInner = () => {
  const [user, setUser] = useUser();
  return (
    <div>
      {user?.id}
      {user?.name}
    </div>
  );
};

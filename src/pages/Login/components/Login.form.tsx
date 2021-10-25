import { Form } from "formik";
import { FC } from "react";
import { Card } from "./Card/Card";
import { CardAction } from "./CardAction/CardAction";
import { CardContent } from "./CardContent/CardContent";
import { CardHeader } from "./CardHeader/CardHeader";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <Card>
      <CardHeader></CardHeader>
    </Card>
  );
};

export default Login;

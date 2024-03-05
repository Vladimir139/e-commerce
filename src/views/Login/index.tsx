import React, { FC } from "react";

import { Button, Gap, Input } from "@/shared/ui/atoms";

import * as S from "./styles";

export const LoginPage: FC = () => (
  <S.WrapperForm>
    <Gap />
    <S.Form>
      <Input placeholder="john@mail.ru" isRequired>
        Email
      </Input>
      <Input placeholder="changeme" isRequired>
        Password
      </Input>
      <S.WrapperButtons>
        <S.LinkGoHome href="/">Back to Home Page</S.LinkGoHome>
        <Button size="medium" theme="blue" radius="normal" isBorderNone>
          Submit
        </Button>
      </S.WrapperButtons>
    </S.Form>
    <Gap />
  </S.WrapperForm>
);

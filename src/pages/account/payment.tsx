import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import { getLayout as getUserLayout } from "@Shared/layouts/UserPagesWrapper";
import SEO from "@Shared/components/SEO";
import AccountContainer from "@Shared/layouts/Account-Container";
import Content from "@PagesContent/Account/Payment";
import { getLandingPageData } from "@Core/api";
import useUser from "@Hooks/useUser";
import { AccountProvider } from "@Contexts/account/account.provider";

const Payment: NextPage & { getLayout: any } = () => {
  const { user } = useUser({ redirectTo: "/login" });

  return (
    <>
      <SEO tags={defaultMetaTags} />
      <AccountContainer title="Payment">
        {user && (
          <AccountProvider data={{ user }}>
            <Content />
          </AccountProvider>
        )}
      </AccountContainer>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const { headerData, footerData } = await getLandingPageData();

  return {
    props: {
      headerData,
      footerData,
    },
    revalidate: 60,
  };
};

Payment.getLayout = (page: any, pageProps: any) => {
  console.log(pageProps);
  return getUserLayout(
    page,
    "User Account",
    "Manage your account to have a great opportunities"
  );
};
export default Payment;

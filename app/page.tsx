import CommentDto from "src/dto/comment.dto";
import axios from "axios";
import Comment from "src/components/comment/comment";
import PageContainer from "src/components/layout/pageContainer";
import WeddingTitle from "src/components/main/weddingTitle";
import MainImages from "src/components/main/mainImages";
import Direction from "src/components/main/direction";
import BankAccount from "src/components/main/bankAccount";

export default async function Home() {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    responseType: "json",
  });

  const getComments = async (): Promise<CommentDto[]> => {
    return await api
      .get("/api/v1/comments")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  };

  let commentList = await getComments();

  return (
    <PageContainer>
      <WeddingTitle />
      <MainImages />
      <Direction />
      <BankAccount />
      <Comment list={commentList} />
    </PageContainer>
  );
}

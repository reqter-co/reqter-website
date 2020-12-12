import {
  Wrapper,
  ImageBox,
  Image,
  Title,
  Description,
  Footer,
  Date,
} from "./blog-card.style";
import Button from "@Shared/components/Button";
import tw from "twin.macro";
import Link from "@Shared/components/Link";
import Tags from "@Shared/components/Tags";
import { IBlog } from "@Interfaces/blog";
interface IProps {
  data: IBlog;
  sender: "learn" | "blog";
}
const BlogCard = ({ data, sender }: IProps) => {
  const { name, slug, thumbnail, publishdate, shortdescription, tags } = data;
  return (
    <Wrapper>
      <Link href={`/${sender}/${slug}`}>
        <ImageBox>
          <Image src={thumbnail} />
        </ImageBox>
        <Title>{name}</Title>
        <Tags data={tags} />
        <Description>{shortdescription}</Description>
        <Footer>
          <Button
            secondary
            link
            href={`/blog/${slug}`}
            cls={tw`self-start phone:self-stretch`}
            size="sm"
          >
            Read Detail
          </Button>
          <Date>{publishdate}</Date>
        </Footer>
      </Link>
    </Wrapper>
  );
};
export default BlogCard;

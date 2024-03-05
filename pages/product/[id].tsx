import type { NextPage } from "next";

import { IconCart } from "@/shared/lib/icons";
import { Button, Container, Gap } from "@/shared/ui/atoms";
import { Small1PerPagDynamic } from "@/shared/ui/molecules";

import * as S from "../../src/views/ProductSinglePage/styles";
import { Photo } from "../../src/views/ProductSinglePage/styles";

const dataProduct = [
  {
    id: 1,
    title: "Handmade Fresh Table",
    price: 687,
    description:
      "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable ",
    category: {
      id: 5,
      name: "Others",
      image: "https://placeimg.com/640/480/any?r=0.591926261873231",
    },
    images: [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017",
    ],
  },
  {
    id: 3,
    title: "Handmade Fresh Table",
    price: 687,
    description:
      "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable ",
    category: {
      id: 5,
      name: "Others",
      image: "https://placeimg.com/640/480/any?r=0.591926261873231",
    },
    images: [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017",
    ],
  },
  {
    id: 2,
    title: "sadf Fresh Table",
    price: 333,
    description:
      "AElevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable ",
    category: {
      id: 4,
      name: "Others",
      image: "https://placeimg.com/640/480/any?r=0.591926261873231",
    },
    images: [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017",
    ],
  },
  {
    id: 4,
    title: "sadf Fresh Table",
    price: 333,
    description:
      "AElevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable ",
    category: {
      id: 4,
      name: "Others",
      image: "https://placeimg.com/640/480/any?r=0.591926261873231",
    },
    images: [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017",
    ],
  },
  {
    id: 5,
    title: "sadf Fresh Table",
    price: 333,
    description:
      "AElevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable ",
    category: {
      id: 4,
      name: "Others",
      image: "https://placeimg.com/640/480/any?r=0.591926261873231",
    },
    images: [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017",
    ],
  },
];
const ProductPage: NextPage = () => (
  <Container>
    <Gap />
    <S.WrapperSection>
      <S.Block>
        <Small1PerPagDynamic
          slides={dataProduct[0].images.map((image) => (
            <S.Photo src={image} alt="Фотография вещи" fill />
          ))}
          uniqueId={4}
        />
      </S.Block>
      <S.Block>
        <S.Title>GoldBerg WWE</S.Title>
        <S.Category>Category: Miscellaneous</S.Category>
        <S.Description>
          New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10
          Home, OS Office A & J 2016
        </S.Description>
        <S.InnerWrapper>
          <S.Price>107$</S.Price>
          <Button theme="blue" size="normal" radius="normal" isBorderNone>
            <IconCart isWhite /> Add to cart
          </Button>
        </S.InnerWrapper>
      </S.Block>
    </S.WrapperSection>
    <Gap />
  </Container>
);

export default ProductPage;

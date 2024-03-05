import type { NextPage } from "next";

import { Container, Gap } from "@/shared/ui/atoms";
import { Card } from "@/shared/ui/molecules";
import * as S from "@/views/Product/styles";
import { FilterSidebar } from "@/widgets/FilterSidebar";

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

const Product: NextPage = () => (
  <Container isBig>
    <Gap />
    <S.BlocksWrapper>
      <FilterSidebar />
      <S.ListProducts>
        {dataProduct.map((product) => (
          <Card key={product.id} product={product} type="store" />
        ))}
      </S.ListProducts>
    </S.BlocksWrapper>
    <Gap />
  </Container>
);

export default Product;

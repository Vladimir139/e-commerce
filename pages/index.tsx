import type { NextPage } from "next";

import { Container, Gap } from "@/shared/ui/atoms";
import { Card, CardCategory, SwiperBigCentered } from "@/shared/ui/molecules";

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

const dataCategory = [
  {
    id: 1,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
  {
    id: 2,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
  {
    id: 3,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
  {
    id: 4,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
  {
    id: 5,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
  {
    id: 16,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
  {
    id: 71,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
  {
    id: 18,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
  {
    id: 91,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=4278",
  },
];

const Home: NextPage = () => (
  <Container>
    <Gap />
    <SwiperBigCentered
      uniqueId={1}
      slides={dataProduct.map((product) => (
        <Card key={product.id} product={product} type="preview" />
      ))}
    />
    <Gap />
    <SwiperBigCentered
      is4PerViewAuto
      uniqueId={2}
      slides={dataCategory.map((category) => (
        <CardCategory key={category.id} category={category} />
      ))}
    />
    <Gap />
  </Container>
);

export default Home;

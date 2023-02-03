export type IconProps = {
  route: string;
  src: React.ReactNode;
  img: boolean;
};


// Product Sliders Offers - Product List
export type productsListProps = {
  image: string;
  name: string;
  offer: string;
  tag: string;
};
// Product Category Props
export type prdCatProps = {
  src: string;
  title: string;
  route: string;
};
export type ftrLinks = {
  name: string;
  redirect: string;
};
// Footer Links Props
export type footerLinksProps = {
  title: string;
  links: ftrLinks[];
};

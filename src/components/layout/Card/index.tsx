import React from 'react'
import { CardContainer, CardTextContainer, CardActionContainer } from './style'
import { HeadlineThree, BodyTwo } from '../../foundation/Typography'
import Icon from '../../foundation/Icon'
import Button from '../../forms/Button'

interface CardInterface {
  item:
    | 'salt'
    | 'shoyu'
    | 'miso'
    | 'veggie'
    | 'rice'
    | 'wheat'
    | 'pork'
    | 'chicken'
    | 'tofu'
    | 'vegetables'
    | 'mushroom'
    | 'egg'
  isSelected?: boolean
  buttonAction?: () => void
}

const cardItemMapper = {
  salt: {
    title: 'Salt',
    description: 'Simple like the seawater, nothing more ',
    icon: 'salt',
    price: '10'
  },
  shoyu: {
    title: 'Shoyu',
    description: 'The good old and traditional soy sauce ',
    icon: 'shoyu',
    price: '10'
  },
  miso: {
    title: 'Miso',
    description: 'Paste made of fermented soybeans',
    icon: 'miso',
    price: '12'
  },
  veggie: {
    title: 'Veggie Noodles',
    description: 'Noodles made of carrot and zucchini',
    icon: 'veggie',
    price: '12'
  },
  rice: {
    title: 'Rice Noodles',
    description: 'A thicker noodle made of rice flour',
    icon: 'rice',
    price: '10'
  },
  wheat: {
    title: 'Whole Wheat Noodles',
    description: 'The traditional noodle of ramen',
    icon: 'wheat',
    price: '8'
  },
  pork: {
    title: 'Pork Meat',
    description: 'A sliced flavourful pork meat',
    icon: 'pork',
    price: '12'
  },
  chicken: {
    title: 'Fried Chicken',
    description: 'A flavourful fried chicken in slices',
    icon: 'chicken',
    price: '10'
  },
  tofu: {
    title: 'Tofu Steak',
    description: 'A flavourful tofu seasoned with curry',
    icon: 'tofu',
    price: '8'
  },
  vegetables: {
    title: 'Vegetables',
    description: 'A selection of season vegetables',
    icon: 'vegetables',
    price: '6'
  },
  mushroom: {
    title: 'Mushroom',
    description: 'A combination of shiitake and shimeji',
    icon: 'mushroom',
    price: '6'
  },
  egg: {
    title: 'Ajitama Egg',
    description: 'Boiled egg in the broth with the soft yolk',
    icon: 'egg',
    price: '4'
  }
}

const Card: React.FC<CardInterface> = ({ item, isSelected = false, buttonAction }) => {
  return (
    <CardContainer isSelected={isSelected}>
      <Icon
        iconId={
          isSelected
            ? `${cardItemMapper[item].icon}Active`
            : cardItemMapper[item].icon
        }
        height={104}
        width={104}
      />
      <CardTextContainer isSelected={isSelected}>
        <HeadlineThree color="blue">{cardItemMapper[item].title}</HeadlineThree>
        <BodyTwo>{cardItemMapper[item].description}</BodyTwo>
      </CardTextContainer>
      <CardActionContainer isSelected={isSelected}>
        <HeadlineThree color="red">
          US$ {cardItemMapper[item].price}
        </HeadlineThree>
        <Button
          label={isSelected ? 'Remove' : 'Add'}
          backgroundColor={isSelected ? 'yellow' : 'red'}
          iconId={isSelected ? 'close' : 'rightArrow'}
          iconColor={isSelected ? 'red' : 'yellow'}
          onClick={buttonAction}
        />
      </CardActionContainer>
    </CardContainer>
  )
}

export default Card

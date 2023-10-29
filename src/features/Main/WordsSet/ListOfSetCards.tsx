import { useAppDispatch } from '../../../hooks/redux';
import Card from './SetsCard';
import { changeFavoriteSets } from '../../../redux/reducers/UserSlice';
import { listOfCardsWithFav } from './WordSetsCarousel';

interface ListOfSetCards {
  listOfCards: listOfCardsWithFav[];
  visibleElements: number;
}

const ListOfSetCards = ({ listOfCards, visibleElements }: ListOfSetCards) => {
  const dispatch = useAppDispatch();

  const handleClickLikeButton = (id: number) => {
    dispatch(changeFavoriteSets(id));
  };

  const sta = {
    flex: `0 0 calc((100% - ${
      24 * (visibleElements - 1)
    }px) / ${visibleElements})`,
    maxWidth: `calc((100% - ${
      24 * (visibleElements - 1)
    }px) / ${visibleElements})`,
  };

  return (
    <>
      {listOfCards.map((element) => {
        return (
          <Card
            key={element.id}
            imageSrc={element.imageSrc}
            name={element.name}
            style={{ ...element.style, ...sta }}
            favorite={element.favorite}
            onClickLikeButton={() => handleClickLikeButton(element.id)}
          />
        );
      })}
    </>
  );
};

export default ListOfSetCards;

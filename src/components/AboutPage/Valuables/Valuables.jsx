import { Title } from '../BaseComponents/Title/Title';
import { ValuablesCard } from '../ValuablesCard/ValuablesCard';

export const Valuables = () => {
  return (
    <>
      <Title>Наші цінності</Title>
      <ul>
        <li>
          <ValuablesCard
            title={'Якість'}
            text={
              'Ми пишаємося нашою продукцією, яка відповідає найвищим стандартам якості.'
            }
          />
        </li>
        <li>
          <ValuablesCard
            title={'Надійність'}
            text={
              'Ми завжди стоїмо за нашими обіцянками і гарантуємо надійну роботу наших акумуляторів.'
            }
          />
        </li>
        <li>
          <ValuablesCard
            title={'Інновації'}
            text={
              'Ми застосовуємо одні з кращих технологій для створення нових і вдосконалення наших продуктів.'
            }
          />
        </li>
        <li>
          <ValuablesCard
            title={'Співпраця'}
            text={
              'Ми завжди відкриті до співпраці з нашими клієнтами та партнерами для досягнення спільних цілей.'
            }
          />
        </li>
      </ul>
    </>
  );
};

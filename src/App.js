import Header from './Header';
import Card from './Card';
import data from './data.js';

export default function App() {
    const cards = data.map((item) => {
        if (item.id < data.length) {
            return (
                <>
                    <Card key={item.id} item={item} />
                    <hr className='card-line' />
                </>
            );
        } else {
            return <Card key={item.id} item={item} />;
        }
    });

    return (
        <>
            <Header />
            <div className='container'>{cards}</div>
        </>
    );
}

 
import { BookType } from '@/types';

// export const Preview = ({ book }: BookDataType) => {
//   const name = book.volumeInfo.title;
//   const subtitle = book.volumeInfo.subtitle || '';
//   const authors = book.volumeInfo.authors?.join(', ');
//   const image = book.volumeInfo.imageLinks?.smallThumbnail;
//
//   if (image)
//     return (
//       <>
//         <div
//           style={{
//             gap: 5,
//             display: 'flex',
//             flexDirection: 'column',
//             width: 175,
//           }}
//         >
//           <img height='247' src={image} title={name} alt={'image ' + name} />
//           <div>
//             <p
//               title={authors}
//               style={{
//                 // background: 'gray',
//                 whiteSpace: 'nowrap',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//               }}
//             >
//               {authors}
//             </p>
//             <p
//               title={name + '\n' + subtitle}
//               style={{
//                 // background: 'red',
//                 display: '-webkit-box',
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: 'vertical',
//                 overflow: 'hidden',
//               }}
//             >
//               {name}
//             </p>
//           </div>
//         </div>
//       </>
//     );
// };

export const Preview = ({ book }: BookType) => {
  const name = book.volumeInfo.title;
  const subtitle = book.volumeInfo.subtitle || '';
  const authors = book.volumeInfo.authors?.join(', ');
  const image = book.volumeInfo.imageLinks?.smallThumbnail;

  if (image)
    return (
      <>
        <div
          style={{
            gap: 5,
            display: 'flex',
            flexDirection: 'column',
            width: 175,
          }}
        >
          <img height='247' src={image} title={name} alt={'image ' + name} />
          <div>
            <p
              title={authors}
              style={{
                // background: 'gray',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {authors}
            </p>
            <p
              title={name + '\n' + subtitle}
              style={{
                // background: 'red',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {name}
            </p>
          </div>
        </div>
      </>
    );
};

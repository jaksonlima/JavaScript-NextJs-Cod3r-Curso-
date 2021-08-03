import { useRouter } from 'next/router'

export default function List1() {
  const { query: { number = 1 } } = useRouter()

  const dinamycArray = Array.from({length: number}, (v, k) => k)
  .sort((a,b) =>  a + b)
  return (
    <div>+
      {dinamycArray.map(item => (
        <span key={item} style={{display: 'flex', backgroundColor: `#62${item}`, margin: '4px'}}>
          #{item}
        </span>
      ))}
    </div>
   );
}
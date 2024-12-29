'use client';
    import { tarotCards } from '../../../data/tarotCards';
    import Link from 'next/link';
    import Image from 'next/image';

    export default function CardDetail({ params }: { params: { id: string } }) {
      const card = tarotCards.find(card => card.id === parseInt(params.id));

      if (!card) {
        return <div>カードが見つかりません</div>;
      }

      return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 py-10">
            <Link 
              href="/"
              className="inline-block mb-8 text-purple-300 hover:text-purple-100 transition duration-300"
            >
              ← 戻る
            </Link>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative aspect-[2/3] w-64">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">{card.name}</h1>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-2">カードの意味</h2>
                  <p className="text-gray-200">{card.meaning}</p>
                  
                  <h2 className="text-xl font-semibold mt-6 mb-2">詳細な解釈</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-purple-300">正位置</h3>
                      <p className="text-gray-200">
                        {card.meaning}の状態が強く現れています。前向きな意味として解釈できます。
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-300">逆位置</h3>
                      <p className="text-gray-200">
                        {card.meaning}の状態が停滞または阻害されている可能性があります。注意が必要かもしれません。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
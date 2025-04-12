'use client';

import {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {getStripeProducts, StripeProduct} from '@/services/stripe';

export default function SubscriptionsPage() {
  const [products, setProducts] = useState<StripeProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getStripeProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-extrabold tracking-tight text-center lg:text-5xl mb-8">
        Our <span className="text-primary">Subscriptions</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">
                ${(product.priceCents / 100).toFixed(2)} / month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

/**
 * Represents a Stripe Product.
 */
export interface StripeProduct {
  /**
   * The ID of the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The price of the product in cents.
   */
  priceCents: number;
  /**
   * A description of the product.
   */
  description: string;
}

/**
 * Asynchronously retrieves a list of Stripe products.
 *
 * @returns A promise that resolves to an array of StripeProduct objects.
 */
export async function getStripeProducts(): Promise<StripeProduct[]> {
  // TODO: Implement this by calling the Stripe API.

  return [
    {
      id: 'prod_123',
      name: 'Basic Subscription',
      priceCents: 1000,
      description: 'Access to basic features.'
    },
    {
      id: 'prod_456',
      name: 'Premium Subscription',
      priceCents: 2000,
      description: 'Access to premium features.'
    }
  ];
}

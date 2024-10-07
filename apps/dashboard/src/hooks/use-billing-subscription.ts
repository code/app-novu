import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { differenceInDays, isSameDay } from 'date-fns';
import { GetSubscriptionDto } from '@novu/shared';
import { useAuth } from '@/context';
import { getBillingSubscription } from '@/api/billing';
import { QueryKeys } from '@/utils/query-keys';

const today = new Date();

export type UseSubscriptionType = GetSubscriptionDto & { daysLeft: number; isLoading: boolean };

export const useBillingSubscription = () => {
  const { currentOrganization } = useAuth();

  const { data: subscription, isLoading: isLoadingSubscription } = useQuery<GetSubscriptionDto>(
    [QueryKeys.billingSubscription, currentOrganization?._id],
    getBillingSubscription,
    {
      enabled: !!currentOrganization,
    }
  );

  const daysLeft = useMemo(() => {
    if (!subscription?.trial.end) return 0;

    return isSameDay(new Date(subscription.trial.end), today)
      ? 0
      : differenceInDays(new Date(subscription.trial.end), today);
  }, [subscription?.trial.end]);

  return {
    isLoading: isLoadingSubscription,
    subscription,
    daysLeft,
  };
};
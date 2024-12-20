export default defineEventHandler(async (event) => {
  const { code } = event.context.params as { code: string };

  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  // const { data }: any = await $fetch(uri);
  const { data } = await $fetch<{ data: Record<string, unknown> }>(uri);

  return data;
});

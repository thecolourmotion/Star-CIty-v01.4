/**
 * Helper function to generate WhatsApp links with encoded messages
 * Opens WhatsApp in a new tab with a prefilled message
 */
export function openWhatsApp(message: string): void {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/237653122650?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

/**
 * Pre-defined WhatsApp messages for different contexts
 */
export const whatsappMessages = {
  poolDailyPass: `Hello Star City,

I would like to purchase the Daily Pass (2,000F per person) for the Pool Area.

Please provide me with the next steps.

Thank you.`,

  poolMonthlyPass: `Hello Star City,

I would like to purchase the Monthly Pass (30,000F) for the Pool Area.

Please provide me with the next steps.

Thank you.`,

  poolYearlyPass: `Hello Star City,

I would like to purchase the Yearly Pass (200,000F) for the Pool Area.

Please provide me with the next steps.

Thank you.`,

  poolBookNow: `Hello Star City,

I would like to book the Pool Area.

Please let me know the availability.

Thank you.`,

  loungeContactUs: `Hello Star City,

I would like to reserve the Private Lounge.

Please provide the available dates.

Thank you.`,

  gameCityBookNow: `Hello Star City,

I would like to book Game City.

Please let me know the availability.

Thank you.`,

  gameCityContactUs: `Hello Star City,

I would like more information about Game City.

Thank you.`,

  pizzaHotOrder: `Hello Pizza Hot,

I would like to place an order.

Please assist me.

Thank you.`,

  generalContact: `Hello Star City,

I would like to make an enquiry.

Please get back to me.

Thank you.`,

  generalLearnMore: `Hello Star City,

I would like more information about this service.

Thank you.`,

  generalCall: `Hello Star City,

I would like to speak with your team.

Thank you.`,
}

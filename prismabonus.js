const employeesFromFrance = await prisClient.employees.findMany({
  where: {
    country: 'FR',
  },
});

const updateEmployee = await prisClient.employees.update({
  where: {
    liked_sports: { contains: 'basketball' },
    additional_options: {
      dog_name: 'Ellie',
    },
  },
  data: {
    country: 'BR',
  },
});

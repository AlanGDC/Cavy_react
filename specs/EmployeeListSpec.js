export default function(spec) {


  spec.describe('Tapping on an employee', function() {

    spec.it('shows a button to email them', async function() {
      await spec.exists('EmployeeList.AmyTaylor');

    });

  });
}
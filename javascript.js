var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Welcome to the clone page of 'amazon.com'.\n(This is not the official site of Amazon.)");
     localStorage.setItem('alerted','yes');
    }
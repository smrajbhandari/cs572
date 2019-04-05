const os = require('os');
const { Observable } = require('rxjs');

const observable$ = Observable.create((observer) => {
    observer.next("Checking your system...");
    const totalCpus = os.cpus().length;
    const totalMemory = (os.totalmem() / 1000000000);
    if (totalMemory < 4) {
        observer.next("This app needs at least 4 GB of RAM");
    } else if (totalCpus < 2) {
        observer.next("Processor is not supported.");
    } else {
        observer.complete();
    }


});

observable$.subscribe(
    (data) => { console.log(data) },
    (error) => console.log(error),
    () => console.log("System is checked successfully.")
)
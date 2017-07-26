export const destination = "./";

export const environments = [
    { browserName: 'chrome' }
];

export const tunnel = "SeleniumTunnel";

export const tunnelOptions = {
    drivers: [
        'chrome',
        // 'firefox',
        // "ie"
    ]
};

export const defaultTimeout = 180000;

export const functionalSuites = [
    'build/tests/functional/spec/intern.spec'
];

export const suites = [
    'intern/browser_modules/dojo/has!host-node?build/tests/api/spec/api.spec'
]

export const reporters = [
    "Runner",
    // { id: 'build/lib/reporter/mat-html/mat-reporter' },
    { id: 'build/lib/reporter/getData' },
];

export const filterErrorStack = true;

export const excludeInstrumentation = true;

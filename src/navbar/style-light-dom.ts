export const styleLightDom = `
.nxa-navbar-logo {
    height: var(--nxa-navbar-logo-height, 3rem);
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s ease-in-out;
}

.nxa-navbar--scrolling .nxa-navbar-logo {
    height: var(--nxa-navbar-logo-height-scroll, var(--nxa-navbar-logo-height));
}

.nxa-navbar-logo > * {
    height: 100%;
    width: auto;
}

.nxa-navbar-logo--wide {
    flex-grow: 1;
}

.nxa-navbar-logo--center {
    justify-content: center;
}

.nxa-navigation {
    flex-grow: 1;
}

.nxa-navigation ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: 1rem;
}

.nxa-navigation ul li {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
}

.nxa-navigation ul li a {
    text-decoration: none;
    color: var(--header-text-color);
}

.nxa-topbar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 0.5rem 0;
}

.nxa-topbar--center {
    justify-content: center;
}

.nxa-topbar--right {
    justify-content: flex-end;
}

nxa-navbar-slot-grow {
    flex-grow: 1;
}

@media (min-width: 992px) {
    .nxa-navigation:not(.nxa-navigation--always-mobile) ul {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .nxa-navigation:not(.nxa-navigation--always-mobile) ul li {
        justify-content: center;
    }

    .nxa-navigation:not(.nxa-navigation--always-mobile) .nxa-navigation-item--pusher {
        margin-left: auto;
    }

    .nxa-navigation:not(.nxa-navigation--always-mobile).nxa-navigation--left ul {
        justify-content: flex-start;
    }

    .nxa-navigation:not(.nxa-navigation--always-mobile).nxa-navigation--right ul {
        justify-content: flex-end;
    }

}
`;

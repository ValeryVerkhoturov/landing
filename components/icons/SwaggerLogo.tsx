import LogoProps from "@/components/icons/LogoProps";

export default function SwaggerLogo(props: LogoProps) {
    return (
        <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"
             className={props.className}>
            <path fillRule="evenodd"
                  d="M0.00265547 126.998C-0.457099 198.917 58.8482 255.526 127.06 255.997C197.936 256.489 256.568 197.884 255.995 128.195C256.613 57.8681 198.267 0.46244 129.111 0.00286811C57.9522 -0.47082 0.44515 57.7944 0.00265547 126.998ZM159.866 136.873C164.421 137.639 169.043 133.246 169.327 127.956C169.6 123.077 165.125 118.814 160.08 118.789C155.02 118.703 150.825 122.69 150.653 127.749C150.658 132.794 154.753 136.879 159.798 136.873H159.866ZM92.262 179.243C90.8433 179.251 89.5219 179.259 88.2012 179.22C83.5877 179.084 81.8502 177.944 81.3927 173.477C81.0489 170.105 80.964 166.71 80.879 163.313C80.8189 160.911 80.7587 158.507 80.607 156.111C79.9261 145.346 78.7333 134.746 68.2495 127.923C73.65 123.923 77.5472 119.209 78.785 112.87C79.6538 108.496 80.2488 104.072 80.5661 99.6246C80.7105 97.4996 80.6643 95.3609 80.6182 93.223C80.5673 90.8646 80.5164 88.5073 80.7214 86.171C81.3477 79.0683 81.7917 76.1461 90.3717 76.4089C91.232 76.4347 92.0959 76.3502 92.9973 76.2621C93.4286 76.2199 93.8685 76.1769 94.3207 76.1448V62.0539C93.225 62.0539 92.1699 62.0397 91.1427 62.0259C88.987 61.9969 86.9538 61.9696 84.9249 62.0784C74.3963 62.6367 68.0221 67.6246 66.2846 77.8918C65.4897 82.5855 65.3019 87.3815 65.114 92.1784C65.0176 94.6375 64.9213 97.0969 64.7431 99.5429C64.6247 103.275 64.2243 106.993 63.5489 110.665C62.0647 117.201 59.2677 119.236 52.6322 119.563C51.7471 119.662 50.8674 119.812 50 120.015V135.711C62.1028 136.307 63.7369 140.613 64.7064 153.225C64.8874 155.596 64.8393 157.983 64.7911 160.37C64.7462 162.598 64.7012 164.827 64.8426 167.044C65.055 171.381 65.6351 175.692 66.5787 179.93C69.3348 191.455 80.5661 195.326 94.2009 193.021V179.235C93.5302 179.235 92.8866 179.239 92.262 179.243ZM97.1993 118.789H97.0373C92.048 118.541 87.8022 122.385 87.5544 127.375C87.3065 132.364 91.1506 136.61 96.1399 136.858C96.3374 136.867 96.5334 136.871 96.7309 136.867C101.63 137.149 105.83 133.407 106.112 128.508C106.121 128.344 106.127 128.181 106.127 128.016C106.21 123.002 102.212 118.872 97.1993 118.789ZM137.425 127.719C137.397 122.3 133.756 118.747 128.273 118.789C123.487 118.635 119.482 122.391 119.328 127.177C119.32 127.452 119.324 127.727 119.341 128.002C119.371 133.389 123.017 136.893 128.557 136.868C134.003 136.845 137.455 133.285 137.425 127.719ZM203.705 119.546C197.971 119.285 195.132 117.37 193.673 111.923C192.787 108.421 192.247 104.84 192.061 101.231C191.853 97.9781 191.762 94.7173 191.672 91.4563C191.578 88.0688 191.484 84.6811 191.258 81.3015C190.198 65.5058 178.794 60.0127 162.285 62.7538V76.4498C163.123 76.4498 163.904 76.4456 164.644 76.4417C166.188 76.4335 167.56 76.4262 168.927 76.4593C172.459 76.5465 175.125 77.8891 175.504 81.77C175.683 83.6049 175.767 85.4488 175.85 87.2928C175.931 89.0614 176.011 90.8302 176.175 92.5914C176.34 94.3306 176.488 96.0731 176.637 97.8159C177.104 103.285 177.57 108.757 178.53 114.139C179.576 119.994 183.613 124.337 188.642 127.922C179.853 133.806 177.27 142.234 176.847 151.667C176.715 154.61 176.614 157.554 176.513 160.497C176.39 164.083 176.268 167.669 176.09 171.253C175.797 177.193 173.682 179.121 167.701 179.264C166.595 179.29 165.49 179.37 164.32 179.455C163.741 179.497 163.146 179.54 162.527 179.578V193.604C163.634 193.604 164.717 193.62 165.784 193.636C168.066 193.671 170.272 193.704 172.467 193.574C182.477 192.983 188.535 188.142 190.496 178.439C191.337 173.083 191.829 167.678 191.972 162.259C192.114 160.208 192.189 158.152 192.265 156.095C192.371 153.201 192.478 150.307 192.768 147.431C193.544 139.727 197.046 136.574 204.73 136.096C205.456 135.985 206.171 135.813 206.868 135.584V119.892C206.424 119.843 206.021 119.792 205.646 119.744C204.934 119.653 204.32 119.575 203.705 119.546Z"
                  fill="currentColor"/>
        </svg>
    )
}
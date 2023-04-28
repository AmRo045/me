import nProgress from "nprogress";
import { Contribution, GitHub } from "../services/github";
import { useEffect, useState } from "react";
import Card from "./Card";
import ContributionCmp from "./Contribution";

const Contributions = (): JSX.Element => {
    const [contributions, setContributions] = useState<Contribution[] | []>([]);

    useEffect(() => {
        const abortController = new AbortController();

        nProgress.start();

        GitHub.getContributions("AmRo045", abortController.signal)
            .then((data: Contribution[]) => {
                setContributions(data);
                nProgress.done();
            })
            .catch((error) => {
                nProgress.done();
                if (error.name !== "CanceledError") throw error;
            });

        return () => {
            abortController.abort();
            nProgress.done();
        };
    }, []);

    return (
        <Card type="contributions" header="Contributions">
            {contributions.map((contribution: Contribution, index: number) => (
                <ContributionCmp key={index} contribution={contribution} />
            ))}
        </Card>
    );
};

export default Contributions;
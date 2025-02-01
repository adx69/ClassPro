import React from "react";
import PayRequired from "../../payment";
import { supabase } from "@/utils/Database/supabase";
import { cookies } from "next/headers";
import { encodeString } from "@/misc/encode";

export default async function Faculties() {
	const cookie = (await cookies()).get("key")

	const { data, error } = await supabase
		.from("goscrape")
		.select("subscribed, subscribedSince")
		.eq("token", encodeString(cookie?.value ?? ""))
		.single();

	if (error) {

	}

	const subscribed = data?.subscribed ?? false;
	const subscribedSince = data?.subscribedSince ?? null;

	if (
		!subscribed ||
		!subscribedSince ||
		(subscribed && Date.now() - subscribedSince > 30 * 24 * 60 * 60 * 1000)
	) {
		return <PayRequired />;
	}
	return <Faculties />;
}

import {POST} from "@/app/api/validate/route";

describe("POST /api/validate", () => {
    test("should return 200 and success message for valid input", async () => {
        const req = new Request("http://localhost:3000/api/validate", {
            method: "POST",
            body: JSON.stringify({
                email: "test@example.com",
                endpoint: "https://api.example.com/v1/health"
            })
        });
        const res = await POST(req);
        const data = await res.json();
        expect(res.status).toBe(200);
        expect(data.message).toBe("Validation successful");
    });
});
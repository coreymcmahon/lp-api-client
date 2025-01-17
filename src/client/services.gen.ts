// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { HealthCheckResponse, GetAuctionData, GetAuctionResponse, CreateAguestUserData } from './types.gen';

/**
 * Health check
 * @returns unknown
 * @throws ApiError
 */
export const healthCheck = (): CancelablePromise<HealthCheckResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v3'
}); };

/**
 * Get Auction
 * Retrieve the publicly accessible information for a single auction.
 * @param data The data for the request.
 * @param data.tenant Tenant ID
 * @param data.id The ID of the auction.
 * @returns unknown
 * @throws ApiError
 */
export const getAuction = (data: GetAuctionData): CancelablePromise<GetAuctionResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/v3/{tenant}/auctions/{id}',
    path: {
        tenant: data.tenant,
        id: data.id
    }
}); };

/**
 * Create a Guest User
 * @param data The data for the request.
 * @param data.requestBody
 * @throws ApiError
 */
export const createAguestUser = (data: CreateAguestUserData): CancelablePromise<void> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/v3/guests/create',
    body: data.requestBody,
    mediaType: 'application/json'
}); };